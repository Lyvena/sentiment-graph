import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, ChartBar, Settings, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SentimentChart from '../components/SentimentChart';
import FeedbackList from '../components/FeedbackList';
import ActionItems from '../components/ActionItems';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow p-4">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <Logo />
          <p className="text-gray-600 mt-2">Track and analyze community feedback for continuous improvement</p>
        </div>
        <Button onClick={() => navigate('/auth')} variant="outline">
          Sign In
        </Button>
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
      <Footer />
    </div>
  );
};

export default Index;
