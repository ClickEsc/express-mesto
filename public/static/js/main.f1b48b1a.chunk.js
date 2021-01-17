(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  16(e, t, n) {
    n.r(t); const a = n(0); const o = n(1); const c = n.n(o); const r = n(7); const s = n.n(r); const i = (n(6), n(10)); const u = n(2); const l = n(8); const p = n(9); const d = new (function () { function e(t) { Object(l.a)(this, e), this.baseUrl = t.baseUrl, this.headers = t.headers; } return Object(p.a)(e, [{ key: 'showError', value(e) { return e.ok ? e.json() : (console.log(e), Promise.reject(new Error('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status)))); } }, { key: 'getInitialCards', value() { const e = this; return fetch(''.concat(this.baseUrl, '/cards'), { method: 'GET', headers: this.headers }).then(((t) => e.showError(t))); } }, { key: 'postCard', value(e) { const t = this; return fetch(''.concat(this.baseUrl, '/cards'), { method: 'POST', headers: this.headers, body: JSON.stringify(e) }).then(((e) => t.showError(e))); } }, { key: 'deleteCard', value(e) { const t = this; return fetch(''.concat(this.baseUrl, '/cards/').concat(e._id), { method: 'DELETE', headers: this.headers }).then(((e) => t.showError(e))); } }, { key: 'getUserInfo', value() { const e = this; return fetch(''.concat(this.baseUrl, '/users/me'), { method: 'GET', headers: this.headers }).then(((t) => e.showError(t))); } }, { key: 'editUserInfo', value(e) { const t = this; const n = e.name; const a = e.about; return fetch(''.concat(this.baseUrl, '/users/me'), { method: 'PATCH', headers: this.headers, body: JSON.stringify({ name: n, about: a }) }).then(((e) => t.showError(e))); } }, { key: 'changeUserAvatar', value(e) { const t = this; const n = e.avatar; return fetch(''.concat(this.baseUrl, '/users/me/avatar'), { method: 'PATCH', headers: this.headers, body: JSON.stringify({ avatar: n }) }).then(((e) => t.showError(e))); } }, { key: 'changeLikeCardStatus', value(e, t) { const n = this; return t ? fetch(''.concat(this.baseUrl, '/cards/likes/').concat(e._id), { method: 'DELETE', headers: this.headers }).then(((e) => n.showError(e))) : fetch(''.concat(this.baseUrl, '/cards/likes/').concat(e._id), { method: 'PUT', headers: this.headers }).then(((e) => n.showError(e))); } }]), e; }())({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17', headers: { authorization: '6e218dd6-3398-4e8b-ab7c-72e842f1ee4b', 'Content-Type': 'application/json' } }); const h = c.a.createContext(); const j = c.a.createContext(); const b = function (e) {
      const t = c.a.useContext(j); const n = c.a.useContext(h); const o = t.owner._id === n._id; const r = t.likes.some(((e) => e._id === n._id)); const s = ''.concat(r ? 'photo-gallery__like-button photo-gallery__like-button_clicked' : 'photo-gallery__like-button'); return Object(a.jsxs)('li', {
        className: 'photo-gallery__item',
        children: [Object(a.jsx)('img', {
          className: 'photo-gallery__image', onClick() { e.onCardClick(e.card); }, alt: t.alt, src: t.link,
        }), Object(a.jsx)('h2', { className: 'photo-gallery__heading', children: t.name }), Object(a.jsxs)('div', { className: 'photo-gallery__like-container', children: [Object(a.jsx)('button', { className: s, onClick() { e.onCardLike(t); }, type: 'button' }), Object(a.jsx)('p', { className: 'photo-gallery__like-counter', children: ''.concat(t.likes.length) })] }), o ? Object(a.jsx)('button', { className: 'photo-gallery__remove-button', onClick() { e.onCardDelete(t); }, type: 'button' }) : ''],
      });
    }; const _ = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('div', { className: 'header__logo' }) }); }; const m = function (e) {
      const t = c.a.useContext(h); return Object(a.jsxs)('main', {
        className: 'content',
        children: [Object(a.jsxs)('section', {
          className: 'profile',
          children: [Object(a.jsx)('img', { className: 'profile__avatar', src: ''.concat(t.avatar), alt: '\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f' }), Object(a.jsx)('button', { className: 'profile__edit-button profile__edit-button_avatar', type: 'button', onClick: e.onEditAvatar }), Object(a.jsxs)('div', {
            className: 'profile__info',
            children: [Object(a.jsx)('h1', { className: 'profile__username', children: ''.concat(t.name) }), Object(a.jsx)('button', {
              id: 'editProfilePopupOpenButton', className: 'profile__edit-button profile__edit-button_user-info', type: 'button', onClick: e.onEditProfile,
            }), Object(a.jsx)('p', { className: 'profile__bio', children: ''.concat(t.about) })],
          }), Object(a.jsx)('button', { className: 'profile__add-button', type: 'button', onClick: e.onAddPlace })],
        }), Object(a.jsx)('ul', { className: 'photo-gallery', children: e.cards })],
      });
    }; const f = function () { const e = (new Date()).getFullYear(); return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsxs)('p', { className: 'footer__copyright', children: ['\xa9 ', e, ' Mesto Russia'] }) }); }; const O = function (e) {
      return Object(a.jsx)('div', {
        className: 'popup popup_'.concat(e.name, ' ').concat(e.isOpen ? 'popup_opened' : ''),
        children: Object(a.jsxs)('form', {
          noValidate: !0,
          onSubmit: e.onSubmit,
          className: 'popup__form popup__form_'.concat(e.name),
          name: ''.concat(e.name, '-form'),
          children: [Object(a.jsx)('button', {
            className: 'popup__close', onClick: e.onClose, type: 'button', 'aria-label': '\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f',
          }), Object(a.jsx)('h2', { className: 'popup__title', children: ''.concat(e.title) }), e.children, Object(a.jsx)('button', {
            className: 'popup__save', type: 'submit', 'aria-label': '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f', children: ''.concat(e.buttonTitle),
          })],
        }),
      });
    }; const v = function (e) {
      const t = c.a.useContext(h); const n = c.a.useState(''); const o = Object(u.a)(n, 2); const r = o[0]; const s = o[1]; const i = c.a.useState(''); const l = Object(u.a)(i, 2); const p = l[0]; const d = l[1]; return c.a.useEffect((() => { t && (s(t.name), d(t.about)); }), [t, e.isOpen]), Object(a.jsx)(O, {
        isOpen: e.isOpen,
        onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: r, about: p }); },
        onClose: e.onClose,
        name: 'edit-profile',
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        buttonTitle: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsxs)('div', {
            className: 'popup__wrap',
            children: [Object(a.jsx)('input', {
              required: !0, id: 'username-input', value: r || '', onChange(e) { s(e.target.value); }, className: 'popup__input popup__username', name: 'name', placeholder: '\u0418\u043c\u044f', minLength: '2', maxLength: '40',
            }), Object(a.jsx)('span', { id: 'username-input-error', className: 'popup__error-text popup__error-text_username' })],
          }), Object(a.jsxs)('div', {
            className: 'popup__wrap',
            children: [Object(a.jsx)('input', {
              required: !0, id: 'bio-input', value: p || '', onChange(e) { d(e.target.value); }, className: 'popup__input popup__bio', name: 'about', placeholder: '\u041e \u0441\u0435\u0431\u0435', minLength: '2', maxLength: '200',
            }), Object(a.jsx)('span', { id: 'bio-input-error', className: 'popup__error-text popup__error-text_bio' })],
          })],
        }),
      });
    }; const x = function (e) {
      const t = c.a.useRef(0); return Object(a.jsx)(O, {
        isOpen: e.isOpen,
        onSubmit(n) { n.preventDefault(), e.onUpdateAvatar({ avatar: t.current.value }); },
        onClose: e.onClose,
        name: 'load-avatar',
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        buttonTitle: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        children: Object(a.jsx)(a.Fragment, {
          children: Object(a.jsxs)('div', {
            className: 'popup__wrap',
            children: [Object(a.jsx)('input', {
              required: !0, id: 'avatar-link-input', type: 'url', ref: t, onChange() { t.current.focus(); }, className: 'popup__input popup__avatar-link', name: 'avatar', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
            }), Object(a.jsx)('span', { id: 'avatar-link-input-error', className: 'popup__error-text popup__error-text_avatar-link' })],
          }),
        }),
      });
    }; const g = function (e) {
      const t = c.a.useContext(j); const n = c.a.useState(''); const o = Object(u.a)(n, 2); const r = o[0]; const s = o[1]; const i = c.a.useState(''); const l = Object(u.a)(i, 2); const p = l[0]; const d = l[1]; return c.a.useEffect((() => { s(r), d(p); }), [t]), Object(a.jsx)(O, {
        isOpen: e.isOpen,
        onSubmit(t) { t.preventDefault(), e.onAddPlace({ name: r, link: p }); },
        onClose: e.onClose,
        name: 'add-card',
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        buttonTitle: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsxs)('div', {
            className: 'popup__wrap',
            children: [Object(a.jsx)('input', {
              required: !0, id: 'place-name-input', value: r, onChange(e) { s(e.target.value); }, className: 'popup__input popup__place-name', name: 'name', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', minLength: '1', maxLength: '30',
            }), Object(a.jsx)('span', { id: 'place-name-input-error', className: 'popup__error-text popup__error-text_place-name' })],
          }), Object(a.jsxs)('div', {
            className: 'popup__wrap',
            children: [Object(a.jsx)('input', {
              required: !0, id: 'place-link-input', value: p, onChange(e) { d(e.target.value); }, type: 'url', className: 'popup__input popup__place-link', name: 'link', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
            }), Object(a.jsx)('span', { id: 'place-link-input-error', className: 'popup__error-text popup__error-text_place-link' })],
          })],
        }),
      });
    }; const C = function (e) {
      return Object(a.jsx)('div', {
        className: 'popup popup_'.concat(e.name, ' ').concat(e.card && 'popup_opened'),
        children: Object(a.jsxs)('figure', {
          className: 'popup__container popup__container_show-image',
          children: [Object(a.jsx)('button', {
            className: 'popup__close popup__close_show-image', onClick: e.onClose, type: 'button', 'aria-label': '\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f',
          }), Object(a.jsx)('img', { className: 'popup__image', alt: e.card ? e.card.alt : '', src: e.card ? e.card.src : '' }), Object(a.jsx)('figcaption', { className: 'popup__caption', children: e.card ? e.card.name : '' })],
        }),
      });
    }; const k = function () {
      const e = c.a.useState({}); const t = Object(u.a)(e, 2); const n = t[0]; const o = t[1]; c.a.useEffect((() => { d.getUserInfo().then(((e) => { !(function (e) { o(e); }(e)); })).catch(((e) => console.log('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u0437\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: '.concat(e)))); }), []); const r = c.a.useState(!1); const s = Object(u.a)(r, 2); const l = s[0]; const p = s[1]; const O = c.a.useState(!1); const k = Object(u.a)(O, 2); const N = k[0]; const y = k[1]; const E = c.a.useState(!1); const U = Object(u.a)(E, 2); const w = U[0]; const S = U[1]; const P = c.a.useState(void 0); const T = Object(u.a)(P, 2); const L = T[0]; const A = T[1]; function D() { A({ src: this.link, name: this.name, alt: '\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c '.concat(this.name) }); } function F() { p(!1), y(!1), S(!1), A(void 0); } const I = c.a.useState([]); const q = Object(u.a)(I, 2); const J = q[0]; const B = q[1]; function G(e) { const t = e.likes.some(((e) => e._id === n._id)); d.changeLikeCardStatus(e, t).then(((t) => { const n = J.map(((n) => (n._id === e._id ? t : n))); B(n); })).catch(((e) => console.log('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043b\u0430\u0439\u043a\u0430: '.concat(e)))); } function H(e) { d.deleteCard(e).then((() => { const t = J.filter(((t) => t._id !== e._id)); B(t); })).catch(((e) => console.log('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: '.concat(e)))); }c.a.useEffect((() => { d.getInitialCards().then(((e) => { !(function (e) { B(e); }(e.map(((e) => e)))); })).catch(((e) => console.log('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: '.concat(e)))); }), []); const M = J.map(((e) => Object(a.jsx)(j.Provider, {
        value: e,
        children: Object(a.jsx)(b, {
          onCardLike: G, onCardDelete: H, onCardClick: D, name: e.name, link: e.link, likes: e.likes.length, alt: '\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c '.concat(e.name),
        }),
      }, e._id))); return Object(a.jsx)(h.Provider, {
        value: n,
        children: Object(a.jsx)('div', {
          className: 'App',
          children: Object(a.jsx)('div', {
            className: 'page',
            children: Object(a.jsxs)('div', {
              className: 'page__container',
              children: [Object(a.jsx)(_, {}), Object(a.jsx)(m, {
                cards: M, onEditAvatar() { p(!0); }, onEditProfile() { y(!0); }, onAddPlace() { S(!0); }, onCardClick: D,
              }), Object(a.jsx)(f, {}), Object(a.jsx)(x, { isOpen: l, onUpdateAvatar(e) { d.changeUserAvatar(e).then(((e) => { o(e), F(); })).catch(((e) => console.log('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043c\u0435\u043d\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: '.concat(e)))); }, onClose: F }), Object(a.jsx)(v, { isOpen: N, onUpdateUser(e) { d.editUserInfo(e).then(((e) => { o(e), F(); })).catch(((e) => console.log('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: '.concat(e)))); }, onClose: F }), Object(a.jsx)(g, { isOpen: w, onAddPlace(e) { d.postCard(e).then(((e) => { B([e].concat(Object(i.a)(J))), F(); })).catch(((e) => console.log('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: '.concat(e)))); }, onClose: F }), Object(a.jsx)(C, { card: L, onClose: F, name: 'show-image' })],
            }),
          }),
        }),
      });
    }; const N = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 17)).then(((t) => { const n = t.getCLS; const a = t.getFID; const o = t.getFCP; const c = t.getLCP; const r = t.getTTFB; n(e), a(e), o(e), c(e), r(e); })); }; s.a.render(Object(a.jsx)(c.a.StrictMode, { children: Object(a.jsx)(k, {}) }), document.getElementById('root')), N();
  },
  6(e, t, n) {},
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.f1b48b1a.chunk.js.map
