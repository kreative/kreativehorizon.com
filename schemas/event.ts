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
      type: 'number',
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
      name: 'slug',
      title: 'Event Slug',
      type: 'string',
    }),
    defineField({
      name: 'cld_id',
      title: 'Cloudinary ID',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    })
  ],
})
