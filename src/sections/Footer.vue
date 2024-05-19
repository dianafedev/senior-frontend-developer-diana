<template>
  <div class="section-footer lg:px-28 px-4 lg:py-8 py-2 bg-cream mt-8">
    <div class="grid lg:grid-cols-2 grid-cols gap-4">
      <div class="lg:col-span-1 sm:col-span">
        <ul
          class="flex justify-start items-center text-primary gap-14 max-lg:hidden"
        >
          <li>
            <a
              href="#"
              class="font-montserrat font-semibold text-base"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-montserrat font-semibold text-base"
            >
              Category
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-montserrat font-semibold text-base"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-montserrat font-semibold text-base"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div class="lg:col-span-1 sm:col-span">
        <div class="flex justify-end items-center gap-12">
          <img
            src="@/assets/icons/facebook.png"
            class="h-8"
          />
          <img
            src="@/assets/icons/twitter.png"
            class="h-8"
          />
          <img
            src="@/assets/icons/instagram.png"
            class="h-8"
          />
          <img
            src="@/assets/icons/youtube.png"
            class="h-8"
          />
        </div>
      </div>
    </div>
    <hr class="border-solid border-2 border-slate-200 my-8" />
    <div class="flex justify-between items-center">
      <span class="text-base text-gray">
        © 2022 Monito. All rights reserved.
      </span>
      <div>
        <img
          src="@/assets/images/logo.png"
          class="app-logo"
        />
      </div>
      <div>
        <ul
          class="flex justify-start items-center text-gray gap-14 max-lg:hidden"
        >
          <li>
            <a
              href="#"
              class="font-montserrat text-base"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-montserrat text-base"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
