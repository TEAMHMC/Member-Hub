import React from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Catches a render error so one broken component does not blank the whole Hub.
 *
 * There was no boundary at all. index.tsx mounts App directly, so any error
 * thrown during render unmounted the tree and left a white page: no message, no
 * way back, nothing in front of the person to act on. For a member looking for
 * food assistance or a crisis line that is the worst possible failure, because it
 * is indistinguishable from the site being gone.
 *
 * The fallback is deliberately plain and depends on nothing: no API call, no
 * context, no icons that need data. Whatever broke, this still renders. It also
 * carries the crisis number, because the one thing that must survive a broken
 * page is the route to immediate help.
 */

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Logged rather than swallowed, so a support conversation has something to go
    // on. Deliberately not sent anywhere: this can fire on a page holding a
    // member's own information, and shipping that to a third party is not a trade
    // worth making for a stack trace.
    console.error('[HUB] Render error:', error.message, info.componentStack);
  }

  private reload = () => {
    try {
      window.location.reload();
    } catch {
      /* nothing further to try */
    }
  };

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f3ef] p-6">
        <div className="max-w-md w-full bg-white rounded-3xl border border-zinc-200/70 p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-5">
            <AlertTriangle size={26} className="text-amber-600" />
          </div>
          <h1 className="text-xl font-semibold text-zinc-900">Something went wrong on our side</h1>
          <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
            This page failed to load. Nothing you entered has been lost. Reloading usually fixes it.
          </p>
          <button
            onClick={this.reload}
            className="mt-6 w-full px-5 py-3 rounded-full bg-[#233DFF] text-white text-[11px] font-black uppercase tracking-wider"
          >
            Reload the page
          </button>
          <p className="text-xs text-zinc-500 mt-6 leading-relaxed">
            Still stuck? Email{' '}
            <a href="mailto:volunteer@healthmatters.clinic" className="font-semibold text-[#233DFF]">
              volunteer@healthmatters.clinic
            </a>
            .
          </p>
          <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
            If you need help right now, call or text{' '}
            <a href="sms:988" className="font-bold text-[#FF6E40]">988</a> any time.
          </p>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
