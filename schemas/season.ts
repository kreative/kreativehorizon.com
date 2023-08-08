import { defineField, defineType } from "sanity";

export default defineType({
  name: "season",
  title: "Season",
  type: "document",
  fields: [
    defineField({
      name: "number",
      title: "Season Number",
      type: "number",
    }),
    defineField({
      name: "sponsor_cld_ids",
      title: "Sponsor Cloudinary IDs",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
