/**
 * @copyright 2025 Muhammad Amien Ramdhani
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';

/**
 * Components
 */
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';

/**
 * Custom Moduls
 */
import { fadeUp } from '@/lib/animations';

/**
 * Types
 */
type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const toEmail = 'amienramdhaniii@gmail.com';
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const subject = `Portfolio contact from ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Company: ${values.company || '-'}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || '-'}`,
      '',
      values.message,
    ].join('\n');

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailto);
    form.reset();
  };
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        subtitle='Contact'
        title={`Let's make something awesome together!`}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full mx-auto space-y-4 mt-10'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      className='border-0'
                      placeholder='Your Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='company'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      className='border-0'
                      placeholder='Company Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      type='email'
                      className='border-0'
                      placeholder='your@example.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      type='tel'
                      className='border-0'
                      placeholder='+6282345678'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder='Write your message ...'
                    className='h-36 border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            size='lg'
          >
            Send Message
          </Button>
        </form>
      </Form>
    </motion.section>
  );
};
