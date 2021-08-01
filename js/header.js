class header {
    static headerSize = 100;
    static headerElement;
    static colors = {};
    static currentNavLink = "current";

    static changeColor() {
        for (let key in header.colors) {
            if (!header.colors.hasOwnProperty(key)) continue;

            document.querySelectorAll(`a.nav-link[href="#${key}"]`)[0].classList.remove(header.currentNavLink);

            if (header.isInside(header.headerElement, document.getElementById(key))) {
                header.headerElement.style.backgroundColor = header.colors[key].colorValue;
                document.querySelectorAll(`a.nav-link[href="#${key}"]`)[0].classList.add(header.currentNavLink);
            }
        }
    }

    static initialize(headerId, sectionsArray) {
        header.headerElement = document.getElementById(headerId);

        window.addEventListener("scroll", function () {
            header.changeColor();
        });

        sectionsArray.forEach(function (item) {
            let element = document.getElementById(item);
            header.colors[`${item}`] = {
                topOffset: element.offsetTop,
                colorValue: header.getComputedStyle(item, 'background-color')
            };
        });
    }

    static getComputedStyle(id, property) {
        return window.getComputedStyle(document.getElementById(id), null).getPropertyValue(property);
    }

    static isInside(element1, element2) {
        let rect1 = element1.getBoundingClientRect();
        let rect2 = element2.getBoundingClientRect();

        return (
            ((rect2.top - header.headerSize <= rect1.top) && (rect1.top <= rect2.bottom)) &&
            ((rect2.top - header.headerSize <= rect1.bottom) && (rect1.bottom <= rect2.bottom)) &&
            ((rect2.left <= rect1.left) && (rect1.left <= rect2.right)) &&
            ((rect2.left <= rect1.right) && (rect1.right <= rect2.right))
        );
    }

    static isCollide(element1, element2) {
        let rect1 = element1.getBoundingClientRect();
        let rect2 = element2.getBoundingClientRect();

        return !(
            rect1.top > rect2.bottom ||
            rect1.right < rect2.left ||
            rect1.bottom < rect2.top ||
            rect1.left > rect2.right
        );
    }
}