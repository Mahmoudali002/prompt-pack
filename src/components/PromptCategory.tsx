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

interface PromptCategoryProps {
  category: string;
  prompts: Prompt[];
  onCopy: (prompt: string) => void;
}

const PromptCategory: React.FC<PromptCategoryProps> = ({category, prompts, onCopy}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{category}</CardTitle>
        <CardDescription>Explore AI prompts for {category}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {prompts.map((promptItem, index) => (
          <div key={index} className="border rounded-md p-4">
            <p className="font-semibold">{promptItem.prompt}</p>
            <p className="text-sm text-muted-foreground">{promptItem.description}</p>
            <div className="flex justify-end mt-2">
              <Button size="sm" onClick={() => onCopy(promptItem.prompt)}>
                Copy
                <Icons.copy className="ml-2 h-4 w-4"/>
              </Button>
              <RatingDialog category={category} prompt={promptItem.prompt}/>
            </div>
          </div>
        ))}
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
  const {toast} = useToast();

  const handleSubmit = async () => {
    try {
      const feedback = await getPromptFeedback({
        prompt: prompt,
        category: category,
        rating: rating,
        usageContext: 'General Use',
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
            Give a rating from 1 to 5 stars.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center space-x-2">
          <p>Rating: {rating}</p>
          <Slider
            defaultValue={[3]}
            max={5}
            min={1}
            step={1}
            onValueChange={(value) => setRating(value[0])}
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
