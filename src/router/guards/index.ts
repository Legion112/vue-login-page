import {NavigationGuard, NavigationGuardNext, Route} from 'vue-router/types/router';
import {ROUTE_LOGIN, ROUTE_REGISTER} from '@/router';

const isAuthenticated = false

export function authenticated(to: Route, from: Route, next: NavigationGuardNext) {
  if (![ROUTE_LOGIN, ROUTE_REGISTER].includes(to.name || '')  && !isAuthenticated) {
    next({name: 'Login'})
  } else  {
    next()
  }
}

export function guardsFactory(guards: NavigationGuard[]) {
  return (to: Route, from: Route, next: NavigationGuardNext) => {
    guards.forEach((guard)=>{
      guard(to, from, next);
    })
  }
}