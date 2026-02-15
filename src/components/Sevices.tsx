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
import { ServiceCard } from '@/components/ServiceCard';

/**
 * Constant
 */
import { services } from '@/constants';

export const Services = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='services'
    >
      <SectionHeader
        subtitle='Services'
        title='Building With Purpose & Precision'
      />
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
