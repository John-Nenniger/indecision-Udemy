import React from 'react'
import Option from './Option'


const Options = (props) => (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
          >Remove all options</button>
      </div>
      {props.options.length === 0 && <p className="widget__title"
                                        >Add an option to start!</p>}
      {
        props.options.map((option, counter) => (
          <Option
            count={counter + 1}
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  )

export default Options
