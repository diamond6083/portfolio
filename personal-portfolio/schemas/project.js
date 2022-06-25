export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields:[
        {
            name: 'projectNo',
            type: 'number',
            title: 'Project No'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'project_year',
            type: 'number',
            title: 'Project Year'
        },
        {
            name: 'projectDomain',
            type: 'string',
            title: 'Project Domain',
        },
        {
            name: 'projectRole',
            type: 'string',
            title: 'Project Role'
        },

        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
            }
        },
        {
            name: 'projectImage',
            type: 'image',
            title: 'Project Image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'variant_one',
            type: 'image',
            title: 'Variant 1',
            options: {
                hotspot: true
            }
        },
        {
            name: 'variant_two',
            type: 'image',
            title: 'Variant 2',
            options: {
                hotspot: true
            }
        },
        {
            name: 'variant_three',
            type: 'image',
            title: 'Variant 3',
            options: {
                hotspot: true
            }
        }
    ]
}