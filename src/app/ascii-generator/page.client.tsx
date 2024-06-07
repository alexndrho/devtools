'use client';

import { useEffect, useState } from 'react';
import figlet from 'figlet';
import ClipboardCopyButton from '@/components/ClipboardCopyButton';

figlet.defaults({ fontPath: '//unpkg.com/figlet@1.7.0/fonts/' });

const layout = [
  'default',
  'full',
  'fitted',
  'controlled smushing',
  'universal smushing',
];

export default function ClientAsciiConverter() {
  const [input, setInput] = useState('');
  const [font, setFont] = useState<figlet.Fonts>('Standard');
  const [width, setWidth] = useState(80);

  const [horizontalLayout, setHorizontalLayout] =
    useState<figlet.KerningMethods>('default');
  const [verticalLayout, setVerticalLayout] =
    useState<figlet.KerningMethods>('default');

  const [output, setOutput] = useState('');

  useEffect(() => {
    figlet(
      input,
      {
        font: font as figlet.Fonts,
        width,
        horizontalLayout,
        verticalLayout,
      },
      (err, data) => {
        if (err) {
          console.error(err);
          return;
        } else if (!data) {
          return;
        }

        setOutput(data);
      },
    );
  }, [input, font, width, horizontalLayout, verticalLayout]);

  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Input</span>
        </div>

        <textarea
          name="input"
          placeholder="Type here"
          className="textarea textarea-bordered h-32 resize-none"
          onInput={(e) => setInput(e.currentTarget.value)}
        />
      </label>

      <div className="mt-2 flex flex-col md:flex-row gap-2 md:gap-5 ">
        <label className="flex-1 form-control">
          <div className="label">
            <span className="label-text">Fonts</span>
          </div>
          <select
            className="select select-bordered"
            value={font}
            onChange={(e) => setFont(e.target.value as figlet.Fonts)}
          >
            {fonts.map((font) => (
              <option key={font}>{font}</option>
            ))}
          </select>
        </label>

        <label className="flex-1 form-control">
          <div className="label">
            <span className="label-text">Width</span>
          </div>
          <input
            type="number"
            className="input input-bordered"
            value={width}
            min={1}
            onChange={(e) => setWidth(e.target.valueAsNumber)}
          />
        </label>
      </div>

      <div className="mt-2 flex flex-col md:flex-row gap-2 md:gap-5 ">
        <label className="flex-1 form-control">
          <div className="label">
            <span className="label-text">Horizontal layout</span>
          </div>
          <select
            className="select select-bordered"
            value={
              horizontalLayout.charAt(0).toUpperCase() +
              horizontalLayout.slice(1)
            }
            onChange={(e) =>
              setHorizontalLayout(
                e.target.value.toLowerCase() as figlet.KerningMethods,
              )
            }
          >
            {layout.map((layout) => (
              <option key={layout}>
                {layout.charAt(0).toUpperCase() + layout.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex-1 form-control">
          <div className="label">
            <span className="label-text">Vertical layout</span>
          </div>
          <select
            className="select select-bordered"
            value={
              verticalLayout.charAt(0).toUpperCase() + verticalLayout.slice(1)
            }
            onChange={(e) =>
              setVerticalLayout(
                e.target.value.toLowerCase() as figlet.KerningMethods,
              )
            }
          >
            {layout.map((layout) => (
              <option key={layout}>
                {layout.charAt(0).toUpperCase() + layout.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="relative mt-8 mockup-code">
        <ClipboardCopyButton
          value={output}
          position="tooltip-left"
          className="absolute top-2 right-2"
        />

        {input &&
          output.split('\n').map((line, index) => (
            <pre key={index} data-prefix={index}>
              <code>{line}</code>
            </pre>
          ))}
      </div>
    </>
  );
}

const fonts = [
  '1Row',
  '3-D',
  '3D Diagonal',
  '3D-ASCII',
  '3x5',
  '4Max',
  '5 Line Oblique',
  'AMC 3 Line',
  'AMC 3 Liv1',
  'AMC AAA01',
  'AMC Neko',
  'AMC Razor',
  'AMC Razor2',
  'AMC Slash',
  'AMC Slider',
  'AMC Thin',
  'AMC Tubes',
  'AMC Untitled',
  'ANSI Regular',
  'ANSI Shadow',
  'ASCII New Roman',
  'Acrobatic',
  'Alligator',
  'Alligator2',
  'Alpha',
  'Alphabet',
  'Arrows',
  'Avatar',
  'B1FF',
  'Banner',
  'Banner3-D',
  'Banner3',
  'Banner4',
  'Barbwire',
  'Basic',
  'Bear',
  'Bell',
  'Benjamin',
  'Big Chief',
  'Big Money-ne',
  'Big Money-nw',
  'Big Money-se',
  'Big Money-sw',
  'Big',
  'Bigfig',
  'Binary',
  'Block',
  'Blocks',
  'Bloody',
  'Bolger',
  'Braced',
  'Bright',
  'Broadway KB',
  'Broadway',
  'Bubble',
  'Bulbhead',
  'Caligraphy',
  'Caligraphy2',
  'Calvin S',
  'Cards',
  'Catwalk',
  'Chiseled',
  'Chunky',
  'Coinstak',
  'Cola',
  'Colossal',
  'Computer',
  'Contessa',
  'Contrast',
  'Cosmike',
  'Crawford',
  'Crawford2',
  'Crazy',
  'Cricket',
  'Cursive',
  'Cyberlarge',
  'Cybermedium',
  'Cybersmall',
  'Cygnet',
  'DANC4',
  'DOS Rebel',
  'DWhistled',
  'Dancing Font',
  'Decimal',
  'Def Leppard',
  'Delta Corps Priest 1',
  'Diamond',
  'Diet Cola',
  'Digital',
  'Doh',
  'Doom',
  'Dot Matrix',
  'Double Shorts',
  'Double',
  'Dr Pepper',
  'Efti Chess',
  'Efti Font',
  'Efti Italic',
  'Efti Piti',
  'Efti Robot',
  'Efti Wall',
  'Efti Water',
  'Electronic',
  'Elite',
  'Epic',
  'Fender',
  'Filter',
  'Fire Font-k',
  'Fire Font-s',
  'Flipped',
  'Flower Power',
  'Four Tops',
  'Fraktur',
  'Fun Face',
  'Fun Faces',
  'Fuzzy',
  'Georgi16',
  'Georgia11',
  'Ghost',
  'Ghoulish',
  'Glenyn',
  'Goofy',
  'Gothic',
  'Graceful',
  'Gradient',
  'Graffiti',
  'Greek',
  'Heart Left',
  'Heart Right',
  'Henry 3D',
  'Hex',
  'Hieroglyphs',
  'Hollywood',
  'Horizontal Left',
  'Horizontal Right',
  'ICL-1900',
  'Impossible',
  'Invita',
  'Isometric1',
  'Isometric2',
  'Isometric3',
  'Isometric4',
  'Italic',
  'Ivrit',
  'JS Block Letters',
  'JS Bracket Letters',
  'JS Capital Curves',
  'JS Cursive',
  'JS Stick Letters',
  'Jacky',
  'Jazmine',
  'Jerusalem',
  'Katakana',
  'Kban',
  'Keyboard',
  'Knob',
  'Konto Slant',
  'Konto',
  'LCD',
  'Larry 3D 2',
  'Larry 3D',
  'Lean',
  'Letters',
  'Lil Devil',
  'Line Blocks',
  'Linux',
  'Lockergnome',
  'Madrid',
  'Marquee',
  'Maxfour',
  'Merlin1',
  'Merlin2',
  'Mike',
  'Mini',
  'Mirror',
  'Mnemonic',
  'Modular',
  'Morse',
  'Morse2',
  'Moscow',
  'Mshebrew210',
  'Muzzle',
  'NScript',
  'NT Greek',
  'NV Script',
  'Nancyj-Fancy',
  'Nancyj-Improved',
  'Nancyj-Underlined',
  'Nancyj',
  'Nipples',
  'O8',
  'OS2',
  'Octal',
  'Ogre',
  'Old Banner',
  'Pagga',
  "Patorjk's Cheese",
  'Patorjk-HeX',
  'Pawp',
  'Peaks Slant',
  'Peaks',
  'Pebbles',
  'Pepper',
  'Poison',
  'Puffy',
  'Puzzle',
  'Pyramid',
  'Rammstein',
  'Rectangles',
  'Red Phoenix',
  'Relief',
  'Relief2',
  'Reverse',
  'Roman',
  'Rot13',
  'Rotated',
  'Rounded',
  'Rowan Cap',
  'Rozzo',
  'Runic',
  'Runyc',
  'S Blood',
  'SL Script',
  'Santa Clara',
  'Script',
  'Serifcap',
  'Shadow',
  'Shimrod',
  'Short',
  'Slant Relief',
  'Slant',
  'Slide',
  'Small Caps',
  'Small Isometric1',
  'Small Keyboard',
  'Small Poison',
  'Small Script',
  'Small Shadow',
  'Small Slant',
  'Small Tengwar',
  'Small',
  'Soft',
  'Speed',
  'Spliff',
  'Stacey',
  'Stampate',
  'Stampatello',
  'Standard',
  'Star Strips',
  'Star Wars',
  'Stellar',
  'Stforek',
  'Stick Letters',
  'Stop',
  'Straight',
  'Stronger Than All',
  'Sub-Zero',
  'Swamp Land',
  'Swan',
  'Sweet',
  'THIS',
  'Tanja',
  'Tengwar',
  'Term',
  'Test1',
  'The Edge',
  'Thick',
  'Thin',
  'Thorned',
  'Three Point',
  'Ticks Slant',
  'Ticks',
  'Tiles',
  'Tinker-Toy',
  'Tombstone',
  'Train',
  'Trek',
  'Tsalagi',
  'Tubular',
  'Twisted',
  'Two Point',
  'USA Flag',
  'Univers',
  'Varsity',
  'Wavy',
  'Weird',
  'Wet Letter',
  'Whimsy',
  'Wow',
];
