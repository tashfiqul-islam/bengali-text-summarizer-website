'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AuthDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  initialMode: 'login' | 'register';
};

export default function AuthDialog({ isOpen, onClose, onLogin, initialMode }: AuthDialogProps) {
  const [authMode, setAuthMode] = useState<'login' | 'register'>(initialMode);

  useEffect(() => {
    setAuthMode(initialMode);
  }, [initialMode, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1000px] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative hidden lg:flex flex-col items-center justify-between bg-[url('/images/7.jpg')] bg-cover bg-center p-8">
            <div className="flex flex-col items-center justify-center bg-black/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Image src="/images/bts-logo.png" alt="Logo" width={50} height={50} className="mb-0" />
                <h2 className="text-2xl font-bold text-white">Bengali Text Summarizer</h2>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 p-4 rounded backdrop-blur-sm">
              <p className="text-sm font-medium text-white">
                <em>"AI is a tool. The choice about how it gets deployed is ours." — Oren Etzioni</em>
              </p>
            </div>
          </div>
          <div className="p-8">
            <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as 'login' | 'register')} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="space-y-4">
                <h3 className="text-2xl font-semibold">Welcome back</h3>
                <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                    />
                  </div>
                  <Button className="w-full" onClick={() => {
                    onLogin();
                    onClose();
                  }}>
                    Sign in
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="register" className="space-y-4">
                <h3 className="text-2xl font-semibold">Create an account</h3>
                <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-email">Email</Label>
                    <Input
                      id="new-email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="new-password"
                      autoCorrect="off"
                    />
                  </div>
                  <Button className="w-full" onClick={() => {
                    onLogin();
                    onClose();
                  }}>
                    Create account
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full" type="button">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="w-full" type="button">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  <path d="M1 1h22v22H1z" fill="none"/>
                </svg>
                Google
              </Button>
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
