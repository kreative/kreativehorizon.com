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
      name: 'description',
      title: 'Event Description',
      type: 'text',
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
      name: 'location',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Event Link',
      type: 'url',
    }),
    defineField({
      name: 'cover_image',
      title: 'Cover Image',
      type: 'image',
    }),

  ],
})
