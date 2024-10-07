'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const artTestimonials = [
    {
      quote:
        'this relally helped to enhance my sketching skills. this relally helped to enhance my sketching skills. this relally helped to enhance my sketching skills',
      name: 'Alex Johnson',
      title: 'sketching',
    },
    {
      quote:
        "this relally helped to enhance my sketching skills. this relally helped to enhance my sketching skills. this relally helped to enhance my sketching skills",
      name: 'Samantha Lee',
      title: 'sketching',
    },
    {
      quote:
        "this relally helped to enhance my sketching skills.this relally helped to enhance my sketching skills this relally helped to enhance my sketching skills",
      name: 'Michael Chen',
      title: 'sketching',
    },
    {
      quote:
        'this relally helped to enhance my sketching skills. this relally helped to enhance my sketching skills. this relally helped to enhance my sketching skills',
      name: 'Emily Taylor',
      title: 'sketching',
    },
    {
      quote:
        'this relally helped to enhance my sketching skills. this relally helped to enhance my sketching skills.this relally helped to enhance my sketching skills ',
      name: 'Chris Morales',
      title: 'sketching',
    },
  ];

function ArtTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={artTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default ArtTestimonials