"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Hero: React.FC = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    console.log(session);
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Discover the World,
            <span className="sm:block"> One Perfect Itinerary at a Time. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Turn your travel dreams into reality with detailed, AI-optimized trip
            plans designed just for you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={() => signIn()}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
