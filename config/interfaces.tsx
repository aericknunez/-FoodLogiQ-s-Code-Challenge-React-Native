export interface home {
    name: string;
    img: string;
    url: string;
  }

export interface RouteProps {
    caseSensitive?: boolean;
    children?: React.ReactNode;
    element?: React.ReactElement | null;
    index?: boolean;
    path?: string;
  }