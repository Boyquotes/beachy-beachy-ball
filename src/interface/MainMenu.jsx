/*
 *  Beachy Beachy Ball
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import { useState } from 'react';
import useGame from '../stores/useGame.js';
import LogoBall from '../assets/logo_ball_stroke.svg';
import Wordmark from '../assets/wordmark.svg';
import { setLocalStorage } from '../stores/utils.js';

export default function MainMenu() {
  const {
    mode,
    setMode,
    blocksCount,
    setBlocksCount,
    level,
    setLevel,
    difficulty,
    setDifficulty,
    setIsInGame,
  } = useGame();

  const [isSettings, setIsSettings] = useState(false);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      setIsInGame(true);
    }
  });

  return (
    <div className="main-menu">
      <img className="logo-ball" src={LogoBall} />
      <img className="wordmark" src={Wordmark} />
      <div className="main-menu-button" onClick={() => setIsInGame(true)}>
        Play
      </div>

      {!isSettings ? (
        <div className="main-menu-button" onClick={() => setIsSettings(true)}>
          Settings
        </div>
      ) : (
        <>
          <div className="main-menu-section-title">Mode</div>
          <div className="main-menu-selection-area">
            <div
              className={`main-menu-selection ${
                mode === 'random' ? 'main-menu-selected' : ''
              }`}
              onClick={() => setMode('random')}
            >
              Random
            </div>
            <div
              className={`main-menu-selection ${
                mode === 'tour' ? 'main-menu-selected' : ''
              }`}
              onClick={() => setMode('tour')}
            >
              Tour
            </div>
            <div
              className={`main-menu-selection ${
                mode === 'adventure' ? 'main-menu-selected' : ''
              }`}
              onClick={() => setMode('adventure')}
            >
              Adventure
            </div>
          </div>

          {mode === 'random' && (
            <>
              <div className="main-menu-section-title">Difficulty</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 1 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(1);
                    setLocalStorage('difficulty', 1);
                  }}
                >
                  Easy
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 3 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(3);
                    setLocalStorage('difficulty', 3);
                  }}
                >
                  Medium
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 5 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(5);
                    setLocalStorage('difficulty', 5);
                  }}
                >
                  Hard
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 10 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(10);
                    setLocalStorage('difficulty', 10);
                  }}
                >
                  Evil
                </div>
              </div>

              <div className="main-menu-section-title">Number of Blocks</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 5 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(5);
                    setLocalStorage('blocksCount', 5);
                  }}
                >
                  5
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 10 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(10);
                    setLocalStorage('blocksCount', 10);
                  }}
                >
                  10
                </div>

                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 15 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(15);
                    setLocalStorage('blocksCount', 15);
                  }}
                >
                  15
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 20 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(20);
                    setLocalStorage('blocksCount', 20);
                  }}
                >
                  20
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 30 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(30);
                    setLocalStorage('blocksCount', 30);
                  }}
                >
                  30
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 40 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(40);
                    setLocalStorage('blocksCount', 40);
                  }}
                >
                  40
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 50 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(50);
                    setLocalStorage('blocksCount', 50);
                  }}
                >
                  50
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 100 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setBlocksCount(100);
                    setLocalStorage('blocksCount', 100);
                  }}
                >
                  100
                </div>
              </div>
            </>
          )}

          {mode === 'tour' && (
            <>
              <div className="main-menu-section-title">Difficulty</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 1 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(1);
                    setLocalStorage('difficulty', 1);
                  }}
                >
                  Easy
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 3 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(3);
                    setLocalStorage('difficulty', 3);
                  }}
                >
                  Medium
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 5 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(5);
                    setLocalStorage('difficulty', 5);
                  }}
                >
                  Hard
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 10 ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setDifficulty(10);
                    setLocalStorage('difficulty', 10);
                  }}
                >
                  Evil
                </div>
              </div>

              <div className="main-menu-section-title">Beach</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    level === 'copacabana' ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setLevel('copacabana');
                    setLocalStorage('level', 'copacabana');
                  }}
                >
                  Copacabana
                </div>
                <div
                  className={`main-menu-selection ${
                    level === 'santamonica' ? 'main-menu-selected' : ''
                  }`}
                  onClick={() => {
                    setLevel('santamonica');
                    setLocalStorage('level', 'santamonica');
                  }}
                >
                  Santa Monica
                </div>
              </div>
              <div className="coming-soon">More beaches coming soon!</div>
            </>
          )}

          {mode === 'adventure' && (
            <div className="coming-soon">Coming soon!</div>
          )}
        </>
      )}

      <div className="main-menu-about-section">
        <div className="main-menu-about">
          <a
            href="https://michaelkolesidis.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Michael Kolesidis
          </a>
        </div>
        <div className="main-menu-about">
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Licensed under AGPL 3.0
          </a>{' '}
          •{' '}
          <a
            href="https://github.com/michaelkolesidis/beachy-beachy-ball"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
