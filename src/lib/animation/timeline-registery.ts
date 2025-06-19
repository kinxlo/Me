// /* eslint-disable @typescript-eslint/no-explicit-any */
type TimelineMap = {
  [key: string]: gsap.core.Timeline;
};

class TimelineRegistry {
  private timelines: TimelineMap = {};

  set(name: string, timeline: gsap.core.Timeline) {
    this.timelines[name] = timeline;
  }

  get(name: string) {
    return this.timelines[name];
  }

  has(name: string) {
    return !!this.timelines[name];
  }

  remove(name: string) {
    delete this.timelines[name];
  }

  clearAll() {
    this.timelines = {};
  }
}

export const timelineRegistry = new TimelineRegistry();
// if (process.env.NODE_ENV === "development") {
//   (window as any).gsapRegistry = timelineRegistry;
// }
