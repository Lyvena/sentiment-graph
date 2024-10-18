import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, ChartBar, User, Settings, MessageCircle } from 'lucide-react';
import SentimentChart from '../components/SentimentChart';
import FeedbackList from '../components/FeedbackList';
import ActionItems from '../components/ActionItems';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">AI-PGF Community Sentiment</h1>
        <p className="text-gray-600">Track and analyze community feedback for continuous improvement</p>
      </header>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview"><Activity className="mr-2 h-4 w-4" /> Overview</TabsTrigger>
          <TabsTrigger value="sentiment"><ChartBar className="mr-2 h-4 w-4" /> Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="feedback"><MessageCircle className="mr-2 h-4 w-4" /> Feedback</TabsTrigger>
          <TabsTrigger value="actions"><Settings className="mr-2 h-4 w-4" /> Action Items</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Overall Sentiment</CardTitle>
                <CardDescription>Community satisfaction level</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">78%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Feedback</CardTitle>
                <CardDescription>Number of responses received</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">156</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Action Items</CardTitle>
                <CardDescription>Pending improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-orange-500">12</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sentiment">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Trends</CardTitle>
              <CardDescription>Monthly sentiment analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <SentimentChart />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>Latest community responses</CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackList />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="actions">
          <Card>
            <CardHeader>
              <CardTitle>Action Items</CardTitle>
              <CardDescription>Planned improvements based on feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionItems />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;