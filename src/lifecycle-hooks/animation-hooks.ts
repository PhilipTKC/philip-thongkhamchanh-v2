import { lifecycleHooks } from 'aurelia';

import anime from 'animejs';

import nProgress from "nprogress";

import "../css/nprogress.css";

const animateIn = (element) =>
  anime({
    targets: element,
    opacity: [0, 1],
    duration: 700,
    easing: 'easeInExpo',
  });

const animateOut = (element) =>
  anime({
    targets: element,
    opacity: [1, 0],
    duration: 700,
    easing: 'easeOutExpo',
  });

@lifecycleHooks()
export class AnimationHooks {
  private element: HTMLElement;
  private backwards = false;

  constructor() {
    nProgress.configure({ speed: 500 });
  }

  created(vm, controller): void {
    nProgress.start();
    this.element = controller.host;
  }

  attaching() {
    animateIn(this.element);
  }

  attached() {
    nProgress.done();
  }

  detaching() {
    animateOut(this.element);
  }
}
