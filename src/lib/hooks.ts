// React hooks that bind the Hub UI to the live backend.
import * as React from 'react';
import {
  context,
  events as eventsApi,
  client as clientApi,
  type NextAction,
  type HmcEvent,
  type ClientMe,
} from './api';

// Initialize the visitor identity once on app load (sets hmc_vid cookie).
export function useVisitorContext() {
  const [visitorId, setVisitorId] = React.useState<string | null>(null);
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    let alive = true;
    context
      .hello()
      .then((r) => {
        if (alive) setVisitorId(r.visitorId);
      })
      .catch(() => {
        /* offline / blocked cookies — Hub still works anonymously */
      })
      .finally(() => {
        if (alive) setReady(true);
      });
    return () => {
      alive = false;
    };
  }, []);
  return { visitorId, ready };
}

// Ranked "your next step" cards from the rules engine.
export function useNextActions(enabled = true) {
  const [actions, setActions] = React.useState<NextAction[]>([]);
  const [loading, setLoading] = React.useState(false);
  const refresh = React.useCallback(() => {
    setLoading(true);
    context
      .nextActions()
      .then((r) => setActions(r.actions || []))
      .catch(() => setActions([]))
      .finally(() => setLoading(false));
  }, []);
  React.useEffect(() => {
    if (enabled) refresh();
  }, [enabled, refresh]);
  return { actions, loading, refresh };
}

// Upcoming events from the live, cached endpoint.
export function useEvents() {
  const [events, setEvents] = React.useState<HmcEvent[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    let alive = true;
    eventsApi
      .list()
      .then((r) => {
        const list = Array.isArray(r) ? r : r.events || [];
        if (alive) setEvents(list);
      })
      .catch(() => {
        if (alive) setEvents([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);
  return { events, loading };
}

// Signed-in client session (null until they verify a magic link).
export function useClientSession() {
  const [me, setMe] = React.useState<ClientMe | null>(null);
  const [loading, setLoading] = React.useState(true);
  const refresh = React.useCallback(() => {
    setLoading(true);
    clientApi
      .me()
      .then(setMe)
      .catch(() => setMe(null))
      .finally(() => setLoading(false));
  }, []);
  React.useEffect(() => {
    refresh();
  }, [refresh]);
  const signOut = React.useCallback(async () => {
    await clientApi.logout().catch(() => {});
    setMe(null);
  }, []);
  return { me, loading, refresh, signOut };
}
