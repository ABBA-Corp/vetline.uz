import React from 'react'
import { useTranslation } from "react-i18next"

const Content = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const handleChangeLang = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem("language", e.target.value);
    };
    return (
        <div className="content">
            <h1>Скоро! Сайт находится в разработке.</h1>
            {/* <h1>
                {t("content")}
                <br />
                {t("content2")}
            </h1> */}
        </div>
    )
}

export default Content