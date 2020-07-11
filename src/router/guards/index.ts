import {NavigationGuard, NavigationGuardNext, Route} from "vue-router/types/router";

const isAuthenticated = false

export function authenticated(to: Route, from: Route, next: NavigationGuardNext) {
  if (to.name !== 'Login' && !isAuthenticated) {
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