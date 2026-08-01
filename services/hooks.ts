// React hooks binding the Member Hub UI to the live backend.
import { useState, useEffect, useCallback } from 'react';
import {
  context,
  events as eventsApi,
  client as clientApi,
  type NextAction,
  type HmcEvent,
  type ClientMe,
} from './api';

// Initialize the shared visitor identity once on load (sets hmc_vid cookie).
// This is the "remembers you" foundation — the same visitorId is shared with
// Check Yourself, Calm Kit, Event Finder, and Sunny.
export function useVisitorContext() {
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let alive = true;
    context
      .hello()
      .then((r) => alive && setVisitorId(r.visitorId))
      .catch(() => {})
      .finally(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, []);
  return { visitorId, ready };
}

export function useNextActions(enabled = true) {
  const [actions, setActions] = useState<NextAction[]>([]);
  const [loading, setLoading] = useState(false);
  const refresh = useCallback(() => {
    setLoading(true);
    context
      .nextActions()
      .then((r) => setActions(r.actions || []))
      .catch(() => setActions([]))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    if (enabled) refresh();
  }, [enabled, refresh]);
  return { actions, loading, refresh };
}

export function useEvents() {
  const [events, setEvents] = useState<HmcEvent[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let alive = true;
    eventsApi
      .list()
      .then((r) => {
        const list = Array.isArray(r) ? r : r.events || [];
        if (alive) setEvents(list);
      })
      .catch(() => alive && setEvents([]))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);
  return { events, loading };
}

export function useClientSession() {
  const [me, setMe] = useState<ClientMe | null>(null);
  const [loading, setLoading] = useState(true);
  const refresh = useCallback(() => {
    setLoading(true);
    clientApi
      .me()
      .then(setMe)
      .catch(() => setMe(null))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    refresh();
  }, [refresh]);
  const signOut = useCallback(async () => {
    await clientApi.logout().catch(() => {});
    setMe(null);
  }, []);
  return { me, loading, refresh, signOut };
}
