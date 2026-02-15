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
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Learn, develop and continue to grow'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        A graduate with a Bachelor's degree in Information Technology with a GPA
        of 3.96 who has a combination of competencies in web development and
        data management. Experienced in building web-based applications ranging
        from database design, backend development, to the implementation of
        responsive and structured interfaces.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Possesses strong data analysis skills, accustomed to managing and
        processing data accurately to support operational needs and
        decision-making. Accustomed to working systematically, in detail, and
        solution-oriented, with a commitment to continuously develop skills in
        line with dynamic technological developments.
      </motion.p>
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button
          className='mt-5'
          onClick={() => window.open('https://wa.me/6285797249521', '_blank')}
        >
          Contact Me
        </Button>
      </motion.div>
    </motion.section>
  );
};
