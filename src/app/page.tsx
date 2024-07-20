'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { DishCard } from '@/components/ui/DishCard/DishCard';
import { Feedback } from '@/components/ui/Feedbackm/Feedback';
import { Link } from '@/components/ui/Link';
import { RateStars } from '@/components/ui/RateStars';
import { SocialButtons } from '@/components/ui/SocialButtons';

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="flex md:min-h-[calc(100vh-100px)] relative min-h-full pt-0 md:pt-2"
      >
        <div className="reveal-right hidden md:block bg-muted w-[50%] h-full absolute rounded-tl-[40%] rounded-tr-[30%] rounded-bl-[20%] top-0 right-0 -z-10"></div>
        <div className="reveal-left text-center md:text-left items-center md:items-start w-full md:w-[45%] flex flex-col gap-7 mt-[5%]">
          <h1 className="text-[4rem] leading-snug font-black">
            O Sabor que vai até <span className="text-secundary">você</span>
          </h1>

          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            dolores commodi, obcaecati dolorem maiores, quidem odit dolorum
            earum ab id eum repudiandae ea nulla omnis voluptatum eius libero
            molestiae suscipit!
          </p>

          <div className="flex gap-6">
            <Button asChild>
              <Link href="#">Ver Cardápio</Link>
            </Button>
            <Button asChild variant="secundary">
              <Link href="tel:+5555555555555">
                <Button className="hidden sm:block shadow-none">
                  <i className="fas fa-phone hidden" />
                </Button>
                (55) 55555-5555
              </Link>
            </Button>
          </div>

          <div className="flex gap-[18px]">
            <SocialButtons />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end w-[70%]">
          <Image
            alt="Banner"
            src="/images/hero.png"
            width={600}
            height={600}
            unoptimized
            priority
            className="reveal-feedback-root hidden md:block min-w-[300px]"
          />
        </div>
      </section>

      <section
        id="menu"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h2>Cardápio</h2>
        <h3 className="text-center">Nossos pratros especiais</h3>

        <div className="reveal-left w-full flex flex-wrap justify-center gap-3 mt-8">
          <DishCard.Root favorite>
            <DishCard.Image src="/images/dish.png" alt="Dish" />
            <DishCard.Title>Lorem Ipsum</DishCard.Title>
            <DishCard.Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias esse vel tenetur animi iure error, minus voluptatem
              perspiciatis, eveniet nisi quidem facilis? Exercitationem
              asperiores dolore doloremque corporis distinctio eligendi tempora.
            </DishCard.Description>
            <div className="flex gap-1">
              <RateStars number={5} /> (+500)
            </div>
            <DishCard.Price price={19.89} />
          </DishCard.Root>

          <DishCard.Root favorite>
            <DishCard.Image src="/images/dish2.png" alt="Dish" />
            <DishCard.Title>Lorem Ipsum</DishCard.Title>
            <DishCard.Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias esse vel tenetur animi iure error, minus voluptatem
              perspiciatis, eveniet nisi quidem facilis? Exercitationem
              asperiores dolore doloremque corporis distinctio eligendi tempora.
            </DishCard.Description>
            <div className="flex gap-1">
              <RateStars number={5} /> (+500)
            </div>
            <DishCard.Price price={19.89} />
          </DishCard.Root>

          <DishCard.Root favorite>
            <DishCard.Image src="/images/dish3.png" alt="Dish" />
            <DishCard.Title>Lorem Ipsum</DishCard.Title>
            <DishCard.Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias esse vel tenetur animi iure error, minus voluptatem
              perspiciatis, eveniet nisi quidem facilis? Exercitationem
              asperiores dolore doloremque corporis distinctio eligendi tempora.
            </DishCard.Description>
            <div className="flex gap-1">
              <RateStars number={5} /> (+500)
            </div>
            <DishCard.Price price={19.89} />
          </DishCard.Root>

          <DishCard.Root favorite>
            <DishCard.Image src="/images/dish4.png" alt="Dish" />
            <DishCard.Title>Lorem Ipsum</DishCard.Title>
            <DishCard.Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias esse vel tenetur animi iure error, minus voluptatem
              perspiciatis, eveniet nisi quidem facilis? Exercitationem
              asperiores dolore doloremque corporis distinctio eligendi tempora.
            </DishCard.Description>
            <div className="flex gap-1">
              <RateStars number={5} /> (+500)
            </div>
            <DishCard.Price price={19.89} />
          </DishCard.Root>
        </div>
      </section>

      <section
        id="testimonials"
        className="min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-center gap-12"
      >
        <Image
          alt="chef"
          src="/images/chef.png"
          width={617}
          height={761}
          className="reveal-left max-w-[500px] hidden lg:block"
        />

        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center">
          <h2>Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl text-center">
            O que os clientes falam sobre nós
          </h3>

          <div className="flex flex-col gap-5 my-8 space-y-2">
            <Feedback.Root className="reveal-right">
              <Feedback.Avatar alt="avatar" src="/images/avatar.png" />

              <Feedback.Content>
                <Feedback.Name>
                  Fulana de Tal
                  <span>
                    <RateStars number={5} />
                  </span>
                </Feedback.Name>
                <Feedback.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit molestias consectetur consequuntur, possimus deleniti
                  pariatur autem sint? Minima perspiciatis quae, corrupti
                  distinctio earum minus voluptatem? Voluptate neque iusto
                  nostrum vitae.
                </Feedback.Description>
              </Feedback.Content>
            </Feedback.Root>

            <Feedback.Root className="reveal-right">
              <Feedback.Avatar alt="avatar" src="/images/avatar.png" />

              <Feedback.Content>
                <Feedback.Name>
                  Fulana de Tal
                  <span>
                    <RateStars number={5} />
                  </span>
                </Feedback.Name>
                <Feedback.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit molestias consectetur consequuntur, possimus deleniti
                  pariatur autem sint? Minima perspiciatis quae, corrupti
                  distinctio earum minus voluptatem? Voluptate neque iusto
                  nostrum vitae.
                </Feedback.Description>
              </Feedback.Content>
            </Feedback.Root>
          </div>

          <Button>Ver mais avaliações</Button>
        </div>
      </section>
    </main>
  );
}
