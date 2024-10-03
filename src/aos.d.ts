declare module 'aos' {
    interface AosOptions {
      duration?: number;
      delay?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      offset?: number;
    }
  
    interface AOS {
      init(options?: AosOptions): void;
      refresh(): void;
    }
  
    const AOS: AOS;
    export default AOS;
  }
  