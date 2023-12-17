import React , {useState, useRef, useEffect} from 'react';
import styles from "../styles/AudioPlayer.module.css"

import { BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import {FaPlay, FaPause} from "react-icons/fa"


const AudioPlayer = () => {
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


    //referance of audio player
    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();     // for running progressbar as audio playing
                                      // we tried to use useeffect but it is not updating everysecond



    useEffect(() => {
       const dur =audioPlayer.current.duration
        setDuration(dur);

        progressBar.current.max = dur
    },[audioPlayer?.current?.loadmetadata, audioPlayer?.current?.readyState])

    

    
    const calculateTime = sec => {
        const min = Math.floor(sec/60);
        const retMin = min <10 ? `0${min}` : min ;
        const seconds = Math.floor(sec % 60);
        const retSec = seconds <10 ? `0${seconds}` : seconds ;
        return `${retMin}:${retSec}`

    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);

        if (!prevValue) {
          audioPlayer.current.play();
          animationRef.current = requestAnimationFrame(whilePlaying)
          
        } else {
          audioPlayer.current.pause();
          cancelAnimationFrame(animationRef.current)
        }
    }


    // running progressBar while audio is playing
    const whilePlaying = () => {
      progressBar.current.value = audioPlayer.current.currentTime
      changePlayerCurrentTime()
      // continue playing
      animationRef.current = requestAnimationFrame(whilePlaying)
    }


    const changePlayerCurrentTime = () => {
      progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value/duration * 100}%` )
      setCurrentTime(progressBar.current.value);
    }


    // while dragging or jumping on slider
    const changeRange = () => {
      audioPlayer.current.currentTime = progressBar.current.value
      changePlayerCurrentTime()
    }

    const forwardThirty = () => {
      progressBar.current.value = Number(progressBar.current.value )+ 30;
      changeRange()
    }

    const backwardThirty = () => {
      progressBar.current.value = Number(progressBar.current.value )- 30;
      changeRange()
    }



    return ( 
        <div className={styles.audioPlayer}>
            <audio src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/6472fca4-196d-4513-839e-89ef31e58183/audio/c098f3a9-8656-49e4-9280-1bca696d3011/default_tc.mp3?nocache" 
            className={styles.forwardBackward} preload="metadata" ref={audioPlayer}
             />

            {/* <audio ref={audioPlayer} preload='metadata' src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/6472fca4-196d-4513-839e-89ef31e58183/audio/c098f3a9-8656-49e4-9280-1bca696d3011/default_tc.mp3?nocache" className={styles.forwardBackward} />
             */}
            <button onClick={backwardThirty}> <BsArrowLeftShort /> 30</button>

            <button onClick={togglePlayPause} className={styles.playPause}> 
               { isPlaying ? <FaPause /> : <FaPlay className={styles.play} /> }
            </button>

            <button onClick={forwardThirty}><BsArrowRightShort /> 30</button>

            {/* current time */}
            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div>
                <input type="range" ref={progressBar} className={styles.progressBar} defaultValue="0"
                  onChange={changeRange}
                />
            </div>

            {/* duration */}
            <div className={styles.duration} >
              { duration && !isNaN(duration) && calculateTime(duration) }
            </div>


        </div>
     );
}

export  {AudioPlayer};