import React from 'react'

export const TitleData = ({ title, data }) => {
    return (
        <div className={'cabinet__body__left__title-name'}>
            <span className={'cabinet__body__left__title-name__title'}>{title}</span>
            <span className={'cabinet__body__left__title-name__data'}>{data}</span>
        </div>
    )
};