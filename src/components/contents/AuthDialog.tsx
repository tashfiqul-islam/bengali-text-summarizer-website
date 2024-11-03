'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
};

export default function AuthDialog({ isOpen, onClose, onLogin }: AuthDialogProps) {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative hidden lg:flex flex-col items-center justify-between bg-[url('/images/7.jpg')] bg-cover bg-center p-5">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <Image src="/images/bts-logo.png" alt="Logo" width={35} height={35} className="mb-0" />
                <h2 className="text-xl font-bold">Bengali Text Summarizer</h2>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <em className='text-gray-600 dark:text-gray-300'>"AI is a tool. The choice about how it gets deployed is ours." — Oren Etzioni</em>
              </p>
            </div>
          </div>
          <div className="p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {authMode === 'login' ? 'Welcome back' : 'Create an account'}
              </DialogTitle>
              <DialogDescription>
                {authMode === 'login'
                  ? 'Enter your email below to login to your account'
                  : 'Enter your email below to create your account'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
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
              <Button className="w-full" onClick={() => {
                onLogin();
                onClose();
              }}>
                Sign {authMode === 'login' ? 'in' : 'up'} with Email
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full" type="button">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <p className="px-8 text-center text-sm text-muted-foreground">
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
            <div className="text-center mt-4">
              {authMode === 'login' ? (
                <p className="text-sm">
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => setAuthMode('register')}
                    className="text-primary font-medium underline underline-offset-4"
                  >
                    Register
                  </button>
                </p>
              ) : (
                <p className="text-sm">
                  Already have an account?{' '}
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-primary font-medium underline underline-offset-4"
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
