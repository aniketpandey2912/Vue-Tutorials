# e-store

This is an sample e-store project. It is for learning purpose.

## Steps

1. Installed vue project
2. Quasar - UI Framework for Vue

## APP STRUCTURE

                                                                APP
                                                                /
                                                            HomeView
                                                            /   |   \
                                                        Navbar  /    \
                                                            Banner  Products

# V-for Directive

1. Used for adding some more functionalities and features to our vue application
   e.g. Loop through the data we want to append like products

# Lifecycle Hooks

-> Creation - Component is created
-> Mounting - Components mounts and becomes visible
-> Update - When some data change happens dynamically within the component
-> Unmount - Component destroyed or when we go to some other page

## What are Hooks ?

    - Hooks are functions or methods that helps in accessing lifecycle features.
    - Controlling component based on some event trigger.

## Events and Hooks

    Lifecycle Event                 Hooks

1.  Creation ----------------------beforeCreate, created

2.  Mounting ----------------------beforeMount, mounted

3.  Updating ----------------------beforeUpdate, updated

4.  Unmounting --------------------beforeUnmount, unmounted

Note - In creation phase, we can't access DOM nodes. DOM nodes are accessibe in mounting phase.

## Different Hooks

1. onMounted : When any component is mounted, onMounted hook is triggered.

   onMounted(() => {
   <!-- DOM access here -->

   })

2. onUpdated : When any update happens within the component, onUpdate hook is triggered.

   onUpdated(() => {
   <!-- Updates access here -->

   })

3. onUnmounted : When any component is destroyed/unmounted, onUnmounted hook is triggered.

   onUnmounted(() => {
   <!-- Cleanups here -->

   })

# Vue Router

# V - Model

- For reading data typed in input tag dynamically
