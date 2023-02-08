import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import cn from 'classnames'
import * as styles from './Search.module.scss'

const INITIAL_VALUE = ''

const Search = () => {
    const searchRef = useRef(null);

    const [searchValue, setSearchValue] = useState(INITIAL_VALUE)
    const [isShowField, setIsShowField] = useState(false);

    const toggleShowSearchField = useCallback(() => setIsShowField(prev => !prev), [])

    const handleChangeSearchValue = (e) => setSearchValue(e.target.value)
    const handleResetSearchValue = useCallback(() => setSearchValue(INITIAL_VALUE), [])

    const handleClickListener = useCallback((e) => {
        const isWasClickInsideSearchRef = e.composedPath().includes(searchRef.current)
        if (isShowField && !isWasClickInsideSearchRef) toggleShowSearchField()
    }, [isShowField, searchRef, toggleShowSearchField])

    useEffect(() => {
        if (searchRef && searchRef.current) {
            document.addEventListener('click', handleClickListener)
            return () => document.removeEventListener('click', handleClickListener)
        }
    }, [searchRef, handleClickListener])

    return (
        <div ref={searchRef} className={cn(styles.search, {
            [styles.isShow]: isShowField
        })}>
            <svg className={styles.searchIcon} onClick={toggleShowSearchField} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 48 48"
                 width="96px" height="96px">
                <path
                    d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"/>
            </svg>
            <input type="text" disabled={!isShowField} className={styles.field} value={searchValue}
                   onChange={handleChangeSearchValue}/>
            <svg className={styles.deleteIcon} onClick={handleResetSearchValue} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24" width="96px" height="96px">
                <path
                    d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
            </svg>
        </div>
    );
};

export default memo(Search);