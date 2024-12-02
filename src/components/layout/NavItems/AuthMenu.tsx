import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import AuthDialog from '@/components/page-contents/AdditionalContents/AuthDialog'

/**
 * AuthMenu Component
 * Handles user authentication-related interactions like login, register, and logout.
 * Features:
 * - Avatar with dropdown menu for authentication options.
 * - Modal dialog for login/register flows.
 *
 * Props:
 * - `isLoggedIn`: Tracks the login state.
 * - `handleAuth`: Callback to open the login/register dialog.
 * - `handleLogout`: Callback to log the user out.
 * - `showAuthDialog`: Controls the visibility of the AuthDialog modal.
 * - `setShowAuthDialog`: Updates the visibility state of the AuthDialog modal.
 * - `authMode`: Tracks the current authentication mode ('login' or 'register').
 */
export default function AuthMenu({
  isLoggedIn,
  handleAuth,
  handleLogout,
  showAuthDialog,
  setShowAuthDialog,
  authMode,
}: {
  isLoggedIn: boolean
  handleAuth: (mode: 'login' | 'register') => void
  handleLogout: () => void
  showAuthDialog: boolean
  setShowAuthDialog: (show: boolean) => void
  authMode: 'login' | 'register'
}) {
  return (
    <>
      {/* Avatar with Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='cursor-pointer'>
            <Avatar className='h-10 w-10 ring-2 ring-blue-500 dark:ring-blue-400'>
              <AvatarImage src='/images/profile-avatar.png' alt='User avatar' />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          {/* Show Logout if logged in, otherwise Login/Register */}
          {isLoggedIn ? (
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem onClick={() => handleAuth('login')}>Login</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAuth('register')}>Register</DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Auth Modal Dialog */}
      {showAuthDialog && (
        <AuthDialog
          isOpen={showAuthDialog} // Modal visibility
          onClose={() => setShowAuthDialog(false)} // Close modal
          onLogin={() => handleAuth('login')} // Handle login via callback
          initialMode={authMode} // Initial mode: 'login' or 'register'
        />
      )}
    </>
  )
}
