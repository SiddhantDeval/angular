import { Component } from '@angular/core';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent {
  quotes = [
    {
      quote:
        'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill',
    },
    {
      quote: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    },
    {
      quote:
        'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
      author: 'Robert Frost',
    },
    {
      quote: 'I attribute my success to this: I never gave or took any excuse.',
      author: 'Florence Nightingale',
    },
    {
      quote: 'You miss 100% of the shots you don’t take.',
      author: 'Wayne Gretzky',
    },
    {
      quote:
        'The most difficult thing is the decision to act, the rest is merely tenacity.',
      author: 'Amelia Earhart',
    },
    {
      quote: 'Every strike brings me closer to the next home run.',
      author: 'Babe Ruth',
    },
    {
      quote:
        'Definiteness of purpose is the starting point of all achievement.',
      author: 'W. Clement Stone',
    },
    {
      quote:
        'We must balance conspicuous consumption with conscious capitalism.',
      author: 'Kevin Kruse',
    },
    {
      quote:
        'Life is what happens to you while you’re busy making other plans.',
      author: 'John Lennon',
    },
    {
      quote: 'We become what we think about.',
      author: 'Earl Nightingale',
    },
    {
      quote: 'Life is 10% what happens to me and 90% of how I react to it.',
      author: 'Charles Swindoll',
    },
    {
      quote:
        'The most common way people give up their power is by thinking they don’t have any.',
      author: 'Alice Walker',
    },
    {
      quote: 'The mind is everything. What you think you become.',
      author: 'Buddha',
    },
    {
      quote:
        'The best time to plant a tree was 20 years ago. The second best time is now.',
      author: 'Chinese Proverb',
    },
    {
      quote: 'An unexamined life is not worth living.',
      author: 'Socrates',
    },
  ];
}
