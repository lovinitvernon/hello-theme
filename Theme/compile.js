import * as sass from 'sass';
import fs from 'fs';
import path from 'path';

const meta = `/**
 * @name Unity
 * @author super.user
 * @authorId 419610859392860162
 * @version 2.1.0
 * @description A premium "Floating Island" theme for 2026 Discord, inspired by Samsung OneUI.
 * @source https://github.com/lovinitvernon/hello-theme
 * @invite BDGSZDYSQ
*/
`;

async function compile() {
    console.log('Compiling SCSS...');
    try {
        const result = sass.compile('src/base.scss', {
            loadPaths: ['src'],
            style: 'expanded'
        });
        
        const finalCss = meta + '\n' + result.css;
        fs.writeFileSync('Unity.css', finalCss);
        console.log('Successfully compiled to Unity.css');
    } catch (err) {
        console.error('Compilation failed:', err);
        process.exit(1);
    }
}

compile();
