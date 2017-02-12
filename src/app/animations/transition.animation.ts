import {trigger, state, animate, style, transition, AnimationEntryMetadata} from '@angular/core';

export function customTransition():AnimationEntryMetadata {
  return slideOutAndIn();
}

function slideOutAndIn():AnimationEntryMetadata {
  return trigger('customTransition', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
    ])
  
}