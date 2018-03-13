import * as React from "react";
import { render } from "react-dom";
import Component from "@reactions/component";
import { MidiPlayer } from "../react-midi-player/";
import { PlayableNote, InstrumentNotes, InstrumentSettings } from "../ui/";

const playingNotes = {};
const RenderMidiPlayer = () => null;

const onTick = console.warn;
const onMidiEvent = console.log;

export const GetAndRenderNotes = () => (
  <div>
    <div>
      <h3> Get Notes </h3>
      <Component
        initialState={{
          startNoteName: "C",
          startNoteOctave: 3,
          scale: "chromatic",
          count: 12,
          instrument: "banjo" //"acoustic_grand_piano"
        }}
        render={({ state, setState }) => {
          return (
            <div>
              <MidiPlayer
                url={
                  "https://raw.githubusercontent.com/grimmdude/MidiPlayerJS/master/demo/midi/zelda.mid"
                }
                onTick={onTick}
                onMidiEvent={onMidiEvent}
              />
              <InstrumentSettings state={state} setState={setState} />
              <InstrumentNotes
                state={state}
                renderNote={({ note, instrument }) => {
                  return (
                    <PlayableNote
                      key={JSON.stringify(note)}
                      note={note}
                      instrument={instrument}
                      playingNotes={playingNotes}
                    />
                  );
                }}
              />
            </div>
          );
        }}
      />
    </div>
  </div>
);
