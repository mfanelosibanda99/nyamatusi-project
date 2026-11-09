// Colors are from Figma: #3E372D = rgb(62,55,45), #312D28 = rgb(49,45,40)
// Stops run from the bottom of the picture (solid) to the top
const gradients = {
  // Screenshot 1: 100% -> 28% -> 0%
  soft: 'linear-gradient(to top, rgba(62,55,45,1) 0%, rgba(62,55,45,0.28) 50%, rgba(62,55,45,0) 100%)',
  // Screenshot 2: 100% -> 82% -> 64% -> 49% -> 28%
  strong:
    'linear-gradient(to top, rgba(62,55,45,1) 0%, rgba(49,45,40,0.82) 25%, rgba(62,55,45,0.64) 50%, rgba(62,55,45,0.49) 75%, rgba(62,55,45,0.28) 100%)',
}

export const activities = [
  {
    title: 'Game drives',
    image: '/sec2-1.png',
    overlay: gradients.soft,
    description:
      'Game drives are what gets us up in the morning in the African bush. They are a great avenue for exploring the land in a safe and exciting way',
  },
  {
    title: 'Walking safari',
    image: '/sec2-2.png',
    overlay: gradients.soft,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget.',
  },
  {
    title: 'Bird watching',
    image: '/sec2-3.png',
    overlay: gradients.soft,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.',
  },
  {
    title: 'Canoeing',
    image: '/sec2-4.png',
    overlay: gradients.strong,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet, cras mattis consectetur purus sit amet fermentum, donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula porta felis euismod semper.',
  },
  {
    title: 'Fishing',
    image: '/sec2-5.png',
    overlay: gradients.soft,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  },
]