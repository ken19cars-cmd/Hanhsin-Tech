"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
  desc?: string;
};

export type NavGroup = {
  title?: string;
  href?: string;
  badge?: string;
  links: NavLink[];
};

export type NavMenu = {
  id: string;
  label: string;
  href: string;
  /** mega: full-width columns; split: two titled columns; list: single column; wide: two-column list */
  layout: "mega" | "split" | "list" | "wide";
  intro?: string;
  groups: NavGroup[];
  footer?: NavLink;
};

type Props = {
  brand: ReactNode;
  menus: NavMenu[];
  cta: NavLink;
};

function NavAnchor({
  link,
  className,
  onNavigate,
  children,
}: {
  link: NavLink;
  className: string;
  onNavigate: () => void;
  children: ReactNode;
}) {
  if (link.href.startsWith("/")) {
    return (
      <Link className={className} href={link.href} onClick={onNavigate}>
        {children}
      </Link>
    );
  }
  const external = link.href.startsWith("http");
  return (
    <a
      className={className}
      href={link.href}
      onClick={onNavigate}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export default function SiteNav({ brand, menus, cta }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const openedByHover = useRef(false);

  // Several menus can share a landing page; only the first match is marked current.
  const activeId = menus.find(
    (menu) => pathname === menu.href || pathname.startsWith(`${menu.href}/`),
  )?.id;

  const canHover = () => window.matchMedia("(hover: hover) and (min-width: 981px)").matches;

  const cancelClose = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  }, [cancelClose]);

  const closeAll = useCallback(() => {
    cancelClose();
    setOpen(null);
    setMobileOpen(false);
  }, [cancelClose]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
      cancelClose();
    };
  }, [closeAll, cancelClose]);

  return (
    <div className="site-header" ref={rootRef}>
      {brand}
      <button
        type="button"
        className={`nav-toggle${mobileOpen ? " is-open" : ""}`}
        aria-expanded={mobileOpen}
        aria-controls="site-nav"
        aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
        onClick={() => setMobileOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav id="site-nav" className={`site-nav${mobileOpen ? " is-open" : ""}`} aria-label="主要">
        <ul className="nav-list">
          {menus.map((menu) => {
            const isOpen = open === menu.id;
            const isActive = menu.id === activeId;
            const panelId = `nav-panel-${menu.id}`;
            return (
              <li
                key={menu.id}
                className={`nav-item nav-${menu.layout}${isOpen ? " is-open" : ""}${
                  isActive ? " is-active" : ""
                }`}
                onPointerEnter={(event) => {
                  if (event.pointerType !== "mouse" || !canHover()) return;
                  cancelClose();
                  if (open !== menu.id) openedByHover.current = true;
                  setOpen(menu.id);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== "mouse" || !canHover()) return;
                  scheduleClose();
                }}
              >
                <div className="nav-top">
                  <Link className="nav-top-link" href={menu.href} onClick={closeAll}>
                    {menu.label}
                  </Link>
                  <button
                    type="button"
                    className="nav-caret"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`展開「${menu.label}」選單`}
                    onClick={() => {
                      // A click right after hover-open should keep the panel, not toggle it shut.
                      if (isOpen && openedByHover.current) {
                        openedByHover.current = false;
                        return;
                      }
                      openedByHover.current = false;
                      setOpen(isOpen ? null : menu.id);
                    }}
                  >
                    <svg viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M2.5 4.5 6 8l3.5-3.5" />
                    </svg>
                  </button>
                </div>
                <div id={panelId} className="nav-panel">
                  <div className="nav-panel-inner">
                    {menu.intro ? <p className="nav-intro">{menu.intro}</p> : null}
                    <div className="nav-groups">
                      {menu.groups.map((group, index) => (
                        <div key={group.title ?? index} className="nav-group">
                          {group.title ? (
                            group.href ? (
                              <Link className="nav-group-title" href={group.href} onClick={closeAll}>
                                {group.badge ? <span className="nav-badge">{group.badge}</span> : null}
                                {group.title}
                              </Link>
                            ) : (
                              <p className="nav-group-title">
                                {group.badge ? <span className="nav-badge">{group.badge}</span> : null}
                                {group.title}
                              </p>
                            )
                          ) : null}
                          <ul>
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <NavAnchor link={link} className="nav-link" onNavigate={closeAll}>
                                  <span>{link.label}</span>
                                  {link.desc ? <small>{link.desc}</small> : null}
                                </NavAnchor>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  {menu.footer ? (
                    <NavAnchor link={menu.footer} className="nav-panel-footer" onNavigate={closeAll}>
                      <span>{menu.footer.label}</span>
                      <span aria-hidden="true">→</span>
                    </NavAnchor>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
        <Link className="btn btn-primary nav-cta" href={cta.href} onClick={closeAll}>
          {cta.label}
        </Link>
      </nav>
    </div>
  );
}
