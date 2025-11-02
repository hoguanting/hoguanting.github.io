<motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 font-mono text-lg">Selected Projects</h3>
        <div className="relative w-full px-2 sm:px-0">
          <Carousel>
            <CarouselContent className="gap-6 px-1">
              {PROJECTS.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="basis-[90%] sm:basis-[70%] lg:basis-[55%]"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation
              alwaysShow
              className="mt-8 flex justify-end"
              classNameButton="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
            />
          </Carousel>
        </div>
      </motion.section>