import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import {Prompt} from "@/services/prompt-library";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {useState} from "react";
import {Slider} from "@/components/ui/slider";
import {getPromptFeedback} from "@/ai/flows/prompt-quality-feedback";
import {useToast} from "@/hooks/use-toast";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

interface PromptCategoryProps {
  category: string;
  prompts: Prompt[];
}

const PromptCategory: React.FC<PromptCategoryProps> = ({category, prompts}) => {
  return (
    <Card className="bg-card shadow-md rounded-lg overflow-hidden">
      <CardHeader className="p-5">
        <CardTitle className="text-xl font-semibold text-foreground">{category}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Explore AI prompts for {category}</CardDescription>
      </CardHeader>
      <CardContent className="p-5">
        <ul className="space-y-4">
          {prompts.map((promptItem, index) => (
            <li key={index} className="bg-secondary/10 rounded-md p-4">
              <p className="font-semibold text-foreground">{promptItem.prompt}</p>
              <p className="text-sm text-muted-foreground mt-1">{promptItem.description}</p>
              <div className="flex justify-end mt-4">
                <Button size="sm" className="mr-2" onClick={() => {
                  navigator.clipboard.writeText(promptItem.prompt);
                }}>
                  Copy
                  <Icons.copy className="ml-2 h-4 w-4"/>
                </Button>
                <RatingDialog category={category} prompt={promptItem.prompt}/>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

interface RatingDialogProps {
  category: string;
  prompt: string;
}

const RatingDialog: React.FC<RatingDialogProps> = ({category, prompt}) => {
  const [rating, setRating] = useState(3);
  const [feedbackText, setFeedbackText] = useState('');
  const {toast} = useToast();

  const handleSubmit = async () => {
    try {
      const feedback = await getPromptFeedback({
        prompt: prompt,
        category: category,
        rating: rating,
        usageContext: feedbackText,
      });

      toast({
        title: 'Feedback submitted!',
        description: feedback.feedback + ' ' + feedback.suggestions,
      });
    } catch (error: any) {
      toast({
        title: 'Error submitting feedback.',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          Rate
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Rate this prompt</AlertDialogTitle>
          <AlertDialogDescription>
            Give a rating from 1 to 5 stars, and provide feedback.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center space-x-2 mb-4">
          <Label htmlFor="rating">Rating: {rating}</Label>
          <Slider
            id="rating"
            defaultValue={[3]}
            max={5}
            min={1}
            step={1}
            onValueChange={(value) => setRating(value[0])}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="feedback">Feedback:</Label>
          <Textarea
            id="feedback"
            placeholder="Enter your feedback here."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PromptCategory;
