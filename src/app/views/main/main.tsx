import React, { useEffect, useState } from 'react';
import Page from 'app/components/page';
import Dialog from 'app/components/dialog';
import CatalogList, { CatalogList__Item } from 'app/components/catalog-list';
import CourseCard from 'app/components/course-card';
import Menu from 'app/components/menu';

import allCourses from 'app/constants/courses';

const ALL_ITEMS_MENU_ITEM_TITLE = 'Все';

const MainView: React.FC = () => {
    const [courses, setCourses] = useState(allCourses);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategoryItem, setActiveCategoryItem] = useState(ALL_ITEMS_MENU_ITEM_TITLE);

    const courseCategories = [ALL_ITEMS_MENU_ITEM_TITLE, ...new Set(allCourses.map((course) => course.category))];

    const searchQueryHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        setSearchQuery(target.value);
    }

    useEffect(() => {
        let newCourses;

        if (activeCategoryItem === ALL_ITEMS_MENU_ITEM_TITLE) {
            newCourses = searchQuery === '' ? allCourses : allCourses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()));
        } else {
            newCourses = allCourses.filter(course => {
                    return (searchQuery !== '' ? course.title.toLowerCase().includes(searchQuery.toLowerCase()) : course)
                        && course.category === activeCategoryItem
                }
            );
        }

        setCourses(newCourses);
    }, [searchQuery, activeCategoryItem]);

    return (
        <Page>
            <Dialog title="Оценка навыков">
                <CatalogList
                    disclaimer="Проверьте свой уровень владения навыками. Ответьте на&nbsp;15&nbsp;вопросов с&nbsp;множественным выбором, получите оценку в&nbsp;топ-30% и&nbsp;получите значок за&nbsp;навык."
                    searchValue={searchQuery}
                    onSearchInputChange={searchQueryHandler}
                    menu={<Menu
                        items={courseCategories}
                        activeItem={activeCategoryItem}
                        onItemClick={setActiveCategoryItem}
                    />}
                >
                    {courses.map((course, index) => (
                        <CatalogList__Item
                            key={course.title}
                        >
                            <CourseCard
                                image={course.image}
                                title={course.title}
                                url={course.url}
                                description={course.description}
                            />
                        </CatalogList__Item>
                    ))}
                </CatalogList>
            </Dialog>
        </Page>
    );
}

export default MainView;
