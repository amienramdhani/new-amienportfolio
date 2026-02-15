/**
 * @copyright 2025 Muhammad Amien Ramdhani
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { motion } from 'motion/react';

/**
 * Custom Modules
 */
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 * |Components
 */
import { Button } from '@/components/ui/button';

/**
 * Assets
 */
import { SparkleIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> <span>Introduction</span>
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'
      >
        I'm <span className='text-primary'> Muhammad Amien Ramdhani </span>
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2'
      >
        <Button asChild>
          <a href='#projects'>My Projects</a>
        </Button>
        <Button
          variant='outline'
          asChild
        >
          <a
            href='/Muhammad_Amien_Ramdhani_Web_English.pdf'
            download='Muhammad_Amien_Ramdhani_CV.pdf'
          >
            Download CV
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};
