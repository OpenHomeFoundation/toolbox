export class SimpleRouter {
  private routes = new Map<string, string>();
  private currentRoute = '/';

  constructor() {
    window.addEventListener('popstate', () => this.handleRoute());
    this.handleRoute();
  }

  addRoute(path: string, component: string) {
    this.routes.set(path, component);
  }

  navigate(path: string) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  private handleRoute() {
    const path = window.location.pathname;
    this.currentRoute = path;

    window.dispatchEvent(
      new CustomEvent('route-changed', {
        detail: { path },
      })
    );
  }

  getCurrentRoute(): string {
    return this.currentRoute;
  }
}

export const router = new SimpleRouter();
