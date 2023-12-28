// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod tray;
use tauri::SystemTray;
use tray::{init_tary,system_tray_loop};

fn main() {
    //初始化托盘
    let system_tray = SystemTray::new();
    tauri::Builder::default()
        .system_tray(init_tary(system_tray))
        .on_system_tray_event(system_tray_loop)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
