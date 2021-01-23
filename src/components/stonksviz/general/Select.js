import React from 'react';

const Select = ({ props }) => {
  const { ref, title, open, setOpen, selected, setSelected, options, abbrMapping } = props;

  return (
    <div className="w-full flex flex-col justify-center" ref={ref}>
      {
        title && (
          <p className="text-xs text-gray-400 md:text-sm">
            { title }
          </p>
        )
      }
      <div className="relative w-inline md:w-md-card lg:w-lg-card xl:w-xl-card">
        <button
          type="button"
          onClick={(e) => setOpen(!open)}
          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-200 focus:border-indigo-200 sm:text-sm"
        >
          <span className="block truncate">
            { abbrMapping ? abbrMapping.get(selected) : selected }
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <div className={`absolute mt-1 w-full rounded-md bg-white shadow-lg z-40 ${!open ? "hidden" : ""}`}>
          <ul
            tabIndex={-1}
            role="listbox"
            className="max-h-health-info-select rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            {
              options.map((option, optionIndex) => (
                <li
                  id={`listbox-option-${optionIndex}`}
                  role="option"
                  className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-200"
                  onClick={(e) => { setSelected(option); setOpen(false); }}
                >
                  <span className="font-normal block truncate">
                    { abbrMapping ? abbrMapping.get(option) : option }
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
