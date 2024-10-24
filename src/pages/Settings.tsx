import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Key, Bot } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = React.useState('');
  const [isAIEnabled, setIsAIEnabled] = React.useState(false);

  const handleSaveSettings = () => {
    if (apiKey) {
      localStorage.setItem('openai_api_key', apiKey);
      setIsAIEnabled(true);
      toast({
        title: "Settings saved",
        description: "OpenAI API key has been saved and AI features are now enabled.",
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid API key.",
        variant: "destructive",
      });
    }
  };

  React.useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsAIEnabled(true);
    }
  }, []);

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            AI Settings
          </CardTitle>
          <CardDescription>
            Configure AI features and API settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Enable AI Features</Label>
                <p className="text-sm text-muted-foreground">
                  Turn on AI-powered features across the application
                </p>
              </div>
              <Switch
                checked={isAIEnabled}
                onCheckedChange={setIsAIEnabled}
                disabled={!apiKey}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apiKey">OpenAI API Key</Label>
              <div className="relative">
                <Key className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your OpenAI API key"
                  className="pl-8"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Your API key will be stored securely in your browser
              </p>
            </div>

            <Button onClick={handleSaveSettings} className="w-full">
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;