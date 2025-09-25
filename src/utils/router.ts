export class SimpleRouter {
  private routes = new Map<string, string>();
  private currentRoute = '/';
  private basePath = '';

  constructor() {
    // Set base path in production (for GitHub Pages)
    if (import.meta.env.PROD) {
      this.basePath = '/toolbox';
    }
    
    window.addEventListener('popstate', () => this.handleRoute());
    this.handleRoute();
  }

  addRoute(path: string, component: string) {
    this.routes.set(path, component);
  }

  navigate(path: string) {
    const fullPath = this.basePath + path;
    window.history.pushState({}, '', fullPath);
    this.handleRoute();
  }

  private handleRoute() {
    let path = window.location.pathname;
    
    // Remove base path if present
    if (this.basePath && path.startsWith(this.basePath)) {
      path = path.slice(this.basePath.length) || '/';
    }
    
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
