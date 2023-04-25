const isMobileOnBrowser = (windowInnerWidth: number) => windowInnerWidth < 1024

const isServer = () => typeof window === 'undefined'

export { isMobileOnBrowser, isServer }
