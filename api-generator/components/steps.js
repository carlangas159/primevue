const StepsProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'model',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'readonly',
        type: 'boolean',
        default: 'true',
        description: 'Whether the items are clickable or not.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Uses to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const StepsSlots = [
    {
        name: 'item',
        description: 'Template of a menuitem.'
    }
];

module.exports = {
    steps: {
        name: 'steps',
        description: 'Steps components is an indicator for the steps in a wizard workflow.',
        props: StepsProps,
        slots: StepsSlots
    }
};
