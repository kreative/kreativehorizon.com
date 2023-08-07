import { m } from 'framer-motion'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Event Tagline',
      type: 'string',
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'reference',
      to: [{ type: 'season' }],
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'start_datetime',
      title: 'Start Datetime',
      type: 'datetime',
    }),
    defineField({
      name: 'end_datetime',
      title: 'End Datetime',
      type: 'datetime',
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
    }),
    defineField({
      name: 'date_label',
      title: 'Date Label',
      type: 'string',
      description: 'This will appear on the Event Card components',
    }),
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'City',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'State',
      title: 'State',
      type: 'string',
      description: 'Use the two-letter abbreviation',
    }),
    defineField({
      name: 'zip',
      title: 'Zip Code',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Use the abbreviation',
    }),
    defineField({
      name: 'google_maps_link',
      title: 'Google Maps iFrame Src',
      type: 'string',
      description: 'This will be used to embed a Google Maps iFrame on the Event Page',
    }),
    defineField({
      name: 'subheadline',
      title: 'Event Subheadline',
      type: 'string',
      description: 'This will appear as the first headline on the Event Page',
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    }),
    defineField({
      name: 'reasons_to_attend',
      title: 'Reasons to Attend',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'reason_to_attend' }] }],
    }),
    defineField({
      name: 'testimonial_ref',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'schedule_days_num',
      title: 'Number of Days in Schedule',
      type: 'number',
    }),
    defineField({
      name: 'day_one_title',
      title: 'Day One Title',
      type: 'string',
    }),
    defineField({
      name: 'day_one_items',
      title: 'Day One Items',
      type: 'text',
    }),
    defineField({
      name: 'day_two_title',
      title: 'Day Two Title',
      type: 'string',
    }),
    defineField({
      name: 'day_two_items',
      title: 'Day Two Items',
      type: 'text',
    }),
    defineField({
      name: 'conclusion_headline',
      title: 'Conclusion Headline',
      type: 'string',
      description: 'This will appear as the last headline on the Event Page',
    }),
    defineField({
      name: 'conclusion_description',
      title: 'Conclusion Description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Event Slug',
      type: 'string',
    }),
    defineField({
      name: 'seo_title',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule: any) => Rule.max(60),
      description: 'This will appear in the browser tab and search results, No longer than 60 characters.',
    }),
    defineField({
      name: 'seo_description',
      title: 'SEO Description',
      type: 'text',
      validation: (Rule: any) => Rule.max(160),
      description: 'This will appear in search results, No longer than 160 characters.',
    }),
    defineField({
      name: 'cld_id',
      title: 'EventCard Cover Image Cloudinary ID',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'EventCard Cover Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'page_cld_id',
      title: 'Event Page Cover Image Cloudinary ID',
      type: 'string',
    }),
    defineField({
      name: 'page_alt',
      title: 'Event Page Cover Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'typeform_id',
      title: 'Typeform ID',
      type: 'string',
    }),
  ],
})
